import Link from 'next/link'
import { IconEdit } from '../../../../public/icons'
import { IProducts } from '@/interfaces/Product'

interface TBodyProps {
  data: IProducts[]
}

export default function TBodyProducts({ data }: TBodyProps) {
  const productTypeToString = (type: number) => {
    const productTypeTransformed: Record<number, string> = {
      0: 'Cartão',
      1: 'Empréstimo',
      2: 'Previdência',
      3: 'Seguro',
      99: 'Diversos',
    }

    if (Object.prototype.hasOwnProperty.call(productTypeTransformed, type)) {
      return productTypeTransformed[type]
    }

    return productTypeTransformed[type]
  }
  return (
    <>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="border-y">
            <td className="p-4 pl-8 text-left">{item.id}</td>
            <td className="p-4 text-left">{item.name}</td>
            <td className="p-4 text-left">
              {item.type !== undefined && productTypeToString(item.type)}
            </td>
            <td className="p-4 text-left">
              {new Date(item.createdAt).toLocaleDateString()}
            </td>
            <td className="p-4 text-left">
              <Link href={`/products/${item.id}`} className="cursor-pointer">
                {IconEdit}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  )
}
