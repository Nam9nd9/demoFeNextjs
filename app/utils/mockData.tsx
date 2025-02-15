export function generateMockData() {
    const baseDate = new Date(2024, 0, 19);
    const mockData = [];
  
    for (let i = 0; i < 30; i++) {
      const newDate = new Date(baseDate);
      newDate.setDate(baseDate.getDate() + i);
  
      const day = newDate.getDate().toString().padStart(2, '0');
      const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
      
      mockData.push({
        day: `${day}/${month}`,
        revenue: Math.floor(Math.random() * 100) + 10,
      });
    }
  
    return mockData;
  }
  
 export function generateMonthlyMockData() {
    const baseDate = new Date(2024, 0, 1);
    const mockData = [];
  
    for (let i = 0; i < 12; i++) {
      const newDate = new Date(baseDate);
      newDate.setMonth(baseDate.getMonth() + i);
  
      const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
      const year = newDate.getFullYear();
      
      mockData.push({
        month: `${month}/${year}`,
        loinhuan: Math.floor(Math.random() * 50) + 10, 
        doanhthu: Math.floor(Math.random() * 100) + 20,
      });
    }
  
    return mockData;
  }