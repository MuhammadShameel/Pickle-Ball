// pages/api/kickflip.ts
import { NextApiRequest, NextApiResponse } from "next";
import { Customization, KickflipApiResponse } from "../types/kickflip";

const KICKFLIP_API_URL = "https://api.kickflip.com/v1/customize-product";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const {
      productId,
      customizations,
    }: { productId: string; customizations: Customization } = req.body;

    if (!productId || !customizations) {
      return res
        .status(400)
        .json({ error: "Missing productId or customizations" });
    }

    try {
      const response = await fetch(KICKFLIP_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.KICKFLIP_API_KEY}`, // Make sure to add your API key in .env file
        },
        body: JSON.stringify({
          productId,
          customizations,
        }),
      });

      const data: KickflipApiResponse = await response.json(); // Type the response data as KickflipApiResponse

      if (response.ok) {
        return res.status(200).json({
          success: true,
          message: "Customization successful",
          productData: data.productData, // Access productData from the response
        });
      } else {
        return res.status(500).json({
          success: false,
          message: data.message || "Something went wrong",
        });
      }
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error?.message || "Unknown error",
      });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default handler;
