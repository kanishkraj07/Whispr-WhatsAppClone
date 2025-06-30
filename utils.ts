export const convertDeliveryTime = (date: Date): string => {
    if(!date) {
        return '';
    }
    const currentDate = new Date();

    if( date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear()) {
        if(date.getDate() === currentDate.getDate()) {
            return 'Today';
        }

        if(date.getDate() === currentDate.getDate() - 1) {
            return 'Yesterday';
        }    
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}


export const formatDateTime = (date: Date): string => {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    return `${day} ${month}, ${hours}:${minutes}`;
  };


  export const formatNumberShort = (num: number): string => {
    if (num >= 1_000_000) {
      return `${(num / 1_000_000).toFixed(num % 1_000_000 === 0 ? 0 : 1)}M`;
    } else if (num >= 1_000) {
      return `${(num / 1_000).toFixed(num % 1_000 === 0 ? 0 : 1)}k`;
    } else {
      return `${num}`;
    }
  };

  export const getPerfectTime = (date: Date): string => {
    const hours = date.getHours().toString().padStart(2, '0');
    const min = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${min}`

  }

  export const formatDate = (date: Date): string => {
    if(date.getDate() === new Date().getDate()) {
      return 'Today';
    }

    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  export const checkCurrentDate = (date: Date): boolean => {
          const currentDate = new Date();
         return `${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}` === 
                `${currentDate.getDate()} ${currentDate.getMonth() + 1} ${currentDate.getFullYear()}`;
      }
  
  