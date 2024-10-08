import SwalDefault from "sweetalert2";

export function useSwal() {
  const Toast = SwalDefault.mixin({
    toast: true,
    position: "top-end",
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: false,
    didOpen: (toast: Element) => {
      toast.addEventListener("mouseenter", SwalDefault.stopTimer);
      toast.addEventListener("mouseleave", SwalDefault.resumeTimer);
    },
  });

  const Swal = SwalDefault.mixin({
    showCloseButton: true,
    showCancelButton: true,
    showConfirmButton: true,
    cancelButtonText: "Cancelar",
    cancelButtonColor: "#FF0000",
  });

  return {
    Toast,
    Swal,
  };
}
