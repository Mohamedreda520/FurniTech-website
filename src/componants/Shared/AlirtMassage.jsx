import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const showToast = (message, icon = 'success') => {
  MySwal.fire({
    toast: true,
    position: 'top-end',
    icon: icon,
    title: message,
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  })
}