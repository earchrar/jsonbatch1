export function Lielements(chatul){
    
    const newli = (data)=>{

        const whenago = dateFns.formatDistance(task.created_at.toDate(),new Date(), { addSuffix: true });

        const html = `
            <li class="shadow rounded-lg px-4 py-2">
                <div class="flex justify-content-between">
                    <h5 class="text-gray-600 font-medium text-sm">${data.username}</h5>
                    <i class="text-gray-300 text-xs">${whenago}</i>
                </div>
                <p class="text-gray-600 text-sm">${data.message}</p>
            </li>
        `;

        chatul.innerHTML += html;
    }

    return {newli}

}