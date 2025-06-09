import Swal, { type SweetAlertIcon } from 'sweetalert2';

export function showAlert(
    title: string,
    text: string,
    icon: SweetAlertIcon = 'info'
) {
    return Swal.fire({
        title,
        text,
        icon,
        confirmButtonColor: '#012640',
        confirmButtonText: 'OK',
    });
}

export function showSuccess(title: string, text: string) {
    return showAlert(title, text, 'success');
}

export function showInfo(title: string, text: string) {
    return showAlert(title, text, 'info');
}

export function showError(title: string, text: string) {
    return showAlert(title, text, 'error');
}

export function showProcessing(title: string, text: string) {
    Swal.fire({
        title,
        text,
        icon: 'info',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        didOpen: () => {
            Swal.showLoading();
        },
    });
}

export function closeProcessing() {
    Swal.close();
}