// pages/products/[id].tsx
import { useRouter } from 'next/router';
import CustomizeProduct from '../components/CustomizeProduct';

const ProductDetailPage = () => {
    const router = useRouter();
    const { id } = router.query; // Assuming `id` is the productId

    if (!id) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-semibold">Product Detail</h1>
            {/* Product customization form */}
            <CustomizeProduct productId={id as string} />
        </div>
    );
};

export default ProductDetailPage;
