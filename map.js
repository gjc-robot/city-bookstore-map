// 初始化地图，中心设为厦门，缩放12级
const map = L.map('map').setView([24.5383, 118.1286], 12);

// 添加OpenStreetMap底图图层
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// 循环添加书店标记
bookstores.forEach(store => {
  const marker = L.marker([store.lat, store.lng]).addTo(map);
  // 点击标记显示弹窗
  marker.bindPopup(`<b>${store.name}</b><br>${store.address}`);
});
