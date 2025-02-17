export function generateMockData() {
  return [
    {
      day:"2025-02-11", revenue: 3558000 },
      { day :"2025-02-12", revenue: 0},
      {day :"2025-02-13",revenue: 628560},
      {day :"2025-02-14",revenue: 41260037.8},
      {day :"2025-02-15",revenue: 0},
      {day :"2025-02-16",revenue: 19972000},
      {day :"2025-02-17",revenue: 1962000
    },
  ]
}

export function generateMonthlyMockData() {

  return [
    {day:"2025-02-11",loinhuan:1,doanhthu:-982000},
    {day:"2025-02-12",loinhuan:0,doanhthu:0},
    {day:"2025-02-13",loinhuan:1,doanhthu:-371440},
    {day:"2025-02-14",loinhuan:0,doanhthu:780037.799999997},
    {day:"2025-02-15",loinhuan:0,doanhthu:0},
    {day:"2025-02-16",loinhuan:4,doanhthu:4312000},
    {day:"2025-02-17",loinhuan:1,doanhthu:212000},
  ];
}
export function genarateSellData(){
  return   [
    {
      "product": "IDOLE",
      "quantity": 12
    },
    {
      "product": "Blue de Chanel",
      "quantity": 12
    },
    {
      "product": "Kem chống nắng",
      "quantity": 8
    },
    {
      "product": "Đất sét",
      "quantity": 7
    },
    {
      "product": "Nước hoa",
      "quantity": 5
    }
  ];
}
export function generateProductMockData() {
  const mockData = [];
  
  for (let i = 1; i <= 200; i++) {
    mockData.push({
      id: i,
      name: `Sản phẩm ${i}`,
      image: `/img/cho1.jpg`,
      type: `SP${i}`,
    });
  }

  return mockData;
}
