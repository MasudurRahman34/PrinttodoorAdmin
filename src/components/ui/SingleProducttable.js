"use client";
import { useRouter, useParams } from "next/navigation";

export default function SingleProducttable({ product }) {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug;
  const id = params?.id;
  return (
    <tr
      className={`product-list cursor-pointer ${
        product?.slug === slug || id ? "bg-primary  !text-white" : " "
      }  `}
      onClick={() => {
        router.push(`/products/${product?.slug || id}`);
      }}
    >
      <td>
        <span className="text-xs">{product?.title}</span>
      </td>
      <td>
        <span className="text-xs">{product?.categories[0]?.title}</span>
      </td>
    </tr>
  );
}
