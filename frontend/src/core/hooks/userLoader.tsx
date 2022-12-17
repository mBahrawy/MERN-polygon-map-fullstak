export default function useLoader() {
  const loader = document.getElementById("app-loader");
  const enableLoader = () => loader && (loader.style.display = "flex");
  const hideLoader = () => loader && (loader.style.display = "none");

  return {
    enableLoader,
    hideLoader,
  };
}
