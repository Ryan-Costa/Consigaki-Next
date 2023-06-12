export function TableUserRequests() {
  const currentItems = [
    {
      agreementId: "0001",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0002",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0003",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0004",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0005",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0006",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0007",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0008",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0009",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0010",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0011",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0012",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0013",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0014",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
  ];

  return (
    <div>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="p-3 text-left">Código</th>
            <th className="p-3 text-left">Cliente</th>
            <th className="p-3 text-left">CPF</th>
            <th className="p-3 text-left">Matrícula</th>
            <th className="p-3 text-left">Convênio</th>
            <th className="p-3 text-left">Consignatária</th>
            <th className="p-3 text-left">Valor liberado</th>
            <th className="p-3 text-left">Parcela</th>
            <th className="p-3 text-left">Prazo</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index} className="border-y">
              <td className="p-3 text-left">{item.agreementId}</td>
              <td className="p-3 text-left">{item.userId}</td>
              <td className="p-3 text-left">{item.cpf}</td>
              <td className="p-3 text-left">{item.registration}</td>
              <td className="p-3 text-left">{item.productId}</td>
              <td className="p-3 text-left">{item.providerId}</td>
              <td className="p-3 text-left">{item.amouunt}</td>
              <td className="p-3 text-left">{item.installment}</td>
              <td className="p-3 text-left">{item.fee}X</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
