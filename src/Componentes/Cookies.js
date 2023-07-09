import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Cookies = () => {

    const MySwal = withReactContent(Swal)

    Swal.fire('Bienvenido! Acepte las cookies para continuar');

}

export default Cookies