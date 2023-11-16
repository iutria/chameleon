import Swal from 'sweetalert2'

export const getStrType = (type)=>{
    return type.includes('/') ? type.split('/').shift() : type;
}

export const downloadImage = async(url)=>{
    try {
        const ext = url.split('.').pop()  ;

        const response = await fetch(url);
        const blob = await response.blob();
        
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        const name = Date.now().toString();
        a.download = `${name}.${ext}`; 

        document.body.appendChild(a);

        a.click();

        document.body.removeChild(a);

        return true;
    } catch (error) {
        return false;
    }
}

export const Toast = ({icon='success', title=''})=>{
    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({icon, title});
}