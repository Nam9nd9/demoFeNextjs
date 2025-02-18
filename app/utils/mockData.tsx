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
  
  for (let i = 1; i <= 4; i++) {
    mockData.push({
      id: i,
      name: `Sản phẩm ${i}`,
      image: `/img/cho${i}.jpg`,
      type: `SP${i}`,
    });
  }

  return mockData;
}

// utils/mockData.ts
export function generateShippingMockData() {
  return [
    // delivery_status
    {
      id: 1,
      orderId: "ORD001",
      date: "2025-02-10",
      customerName: "Nguyễn Văn A",
      shippingStatus: "TRANSACTION",  // Trạng thái vận chuyển
      type: "delivery_status",  // Loại trạng thái
    },
    {
      id: 2,
      orderId: "ORD002",
      date: "2025-02-11",
      customerName: "Trần Thị B",
      shippingStatus: "RETURNING",  // Trạng thái vận chuyển
      type: "delivery_status",  // Loại trạng thái
    },
    {
      id: 3,
      orderId: "ORD003",
      date: "2025-02-12",
      customerName: "Lê Văn C",
      shippingStatus: "RETURNED",  // Trạng thái vận chuyển
      type: "delivery_status",  // Loại trạng thái
    },
    {
      id: 4,
      orderId: "ORD004",
      date: "2025-02-13",
      customerName: "Phạm Thị D",
      shippingStatus: "PICKING",  // Trạng thái vận chuyển
      type: "delivery_status",  // Loại trạng thái
    },
    {
      id: 5,
      orderId: "ORD005",
      date: "2025-02-14",
      customerName: "Nguyễn Thị E",
      shippingStatus: "DELIVERED",  // Trạng thái vận chuyển
      type: "delivery_status",  // Loại trạng thái
    },
    {
      id: 6,
      orderId: "ORD006",
      date: "2025-02-15",
      customerName: "Vũ Minh F",
      shippingStatus: "CANCEL",  // Trạng thái vận chuyển
      type: "delivery_status",  // Loại trạng thái
    },

    // payment_status
    {
      id: 7,
      orderId: "ORD007",
      date: "2025-02-16",
      customerName: "Lê Minh G",
      shippingStatus: "PAYMENT",  // Trạng thái vận chuyển
      type: "payment_status",  // Loại trạng thái
    },
    {
      id: 8,
      orderId: "ORD008",
      date: "2025-02-17",
      customerName: "Trần Anh H",
      shippingStatus: "PARTIAL_PAYMENT",  // Trạng thái vận chuyển
      type: "payment_status",  // Loại trạng thái
    },
    {
      id: 9,
      orderId: "ORD009",
      date: "2025-02-18",
      customerName: "Nguyễn Thị I",
      shippingStatus: "UNPAID",  // Trạng thái vận chuyển
      type: "payment_status",  // Loại trạng thái
    },

    // invoice_status
    {
      id: 10,
      orderId: "ORD010",
      date: "2025-02-19",
      customerName: "Phạm Minh J",
      shippingStatus: "CANCEL",  // Trạng thái vận chuyển
      type: "invoice_status",  // Loại trạng thái
    },
    {
      id: 11,
      orderId: "ORD011",
      date: "2025-02-20",
      customerName: "Vũ Minh K",
      shippingStatus: "DELIVERING",  // Trạng thái vận chuyển
      type: "invoice_status",  // Loại trạng thái
    },
    {
      id: 12,
      orderId: "ORD012",
      date: "2025-02-21",
      customerName: "Lê Thị L",
      shippingStatus: "DELIVERED",  // Trạng thái vận chuyển
      type: "invoice_status",  // Loại trạng thái
    },
    {
      id: 13,
      orderId: "ORD013",
      date: "2025-02-22",
      customerName: "Trần Minh M",
      shippingStatus: "TRANSACTION",  // Trạng thái vận chuyển
      type: "invoice_status",  // Loại trạng thái
    },

    // product_status
    {
      id: 14,
      orderId: "ORD014",
      date: "2025-02-23",
      customerName: "Lê Thị N",
      shippingStatus: "Ngừng giao dịch",  // Trạng thái vận chuyển
      type: "product_status",  // Loại trạng thái
      dry_stock: false,  // Không có hàng khô
    },
    {
      id: 15,
      orderId: "ORD015",
      date: "2025-02-24",
      customerName: "Phạm Minh O",
      shippingStatus: "Đang giao dịch",  // Trạng thái vận chuyển
      type: "product_status",  // Loại trạng thái
      dry_stock: true,  // Có hàng khô
    },

    // inspection_status
    {
      id: 16,
      orderId: "ORD016",
      date: "2025-02-25",
      customerName: "Nguyễn Thị P",
      shippingStatus: "Đã kiểm xong",  // Trạng thái vận chuyển
      type: "inspection_status",  // Loại trạng thái
    },
    {
      id: 17,
      orderId: "ORD017",
      date: "2025-02-26",
      customerName: "Trần Minh Q",
      shippingStatus: "Đang kiểm",  // Trạng thái vận chuyển
      type: "inspection_status",  // Loại trạng thái
    },
  ];
}

