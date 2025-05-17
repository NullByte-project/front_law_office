import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() {}

  /**
   * Muestra un modal de carga con un mensaje personalizado.
   * @param message - Mensaje a mostrar mientras se realiza la carga.
   * @returns Promesa de SweetAlert.
   */
  loading(message: string = 'Por favor espera un momento') {
    return Swal.fire({
      title: 'Cargando...',
      text: message,
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });
  }

  /**
   * Muestra un modal de éxito con título y texto personalizados.
   * @param title - Título del modal.
   * @param text - Mensaje a mostrar.
   * @returns Promesa de SweetAlert.
   */
  success(title: string = 'Éxito', text: string = 'Operación completada') {
    return Swal.fire({
      icon: 'success',
      title,
      text,
      confirmButtonText: 'Aceptar'
    });
  }

  /**
   * Muestra un modal de error con título y texto personalizados.
   * @param title - Título del modal.
   * @param text - Mensaje a mostrar.
   * @returns Promesa de SweetAlert.
   */
  error(title: string = 'Error', text: string = 'Algo salió mal') {
    return Swal.fire({
      icon: 'error',
      title,
      text,
      confirmButtonText: 'Aceptar'
    });
  }

  /**
   * Muestra un modal de confirmación con título y texto personalizados.
   * Incluye botones para aceptar o cancelar.
   * @param title - Título del modal.
   * @param text - Mensaje a mostrar.
   * @returns Promesa de SweetAlert.
   */
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

  /**
   * Muestra un modal informativo grande con contenido HTML personalizado.
   * @param title - Título del modal.
   * @param htmlContent - Contenido HTML a mostrar en el modal.
   * @returns Promesa de SweetAlert.
   */
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
