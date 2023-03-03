export default function Naira(value: any) {
  return `₦${value?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}
