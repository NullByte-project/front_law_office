import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() {}

  loading(message: string = 'Por favor espera un momento') {
    return Swal.fire({
      title: 'Cargando...',
      text: message,
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });
  }

  success(title: string = 'Éxito', text: string = 'Operación completada') {
    return Swal.fire({
      icon: 'success',
      title,
      text,
      confirmButtonText: 'Aceptar'
    });
  }

  error(title: string = 'Error', text: string = 'Algo salió mal') {
    return Swal.fire({
      icon: 'error',
      title,
      text,
      confirmButtonText: 'Aceptar'
    });
  }

  confirm(title: string, text: string) {
    return Swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar'
    });
  }

  showLargeModal(title: string, htmlContent: string) {
    return Swal.fire({
      title: title,
      html: htmlContent,
      icon: 'info',
      confirmButtonText: 'Cerrar',
      width: '60%',
      customClass: {
        popup: 'scrollable-modal'
      },
      scrollbarPadding: false,
      allowOutsideClick: true,
      allowEscapeKey: true,
    });
  }
}
