import { getFirestore } from '../service/fireBaseConfig'


const getItem = (id, setItem, setLoading) => {    
    const dbQuery = getFirestore()
    
    dbQuery.collection('items').doc(id).get() 
        .then(resp => setItem({ id: resp.id, ...resp.data() }))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
}

export default getItem;