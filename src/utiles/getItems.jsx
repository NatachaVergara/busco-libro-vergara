
import { getFirestore } from '../service/fireBaseConfig'
const getItems = (categoryId, setItems, setLoading) => { 
        const db = getFirestore()
        const dbGetQueary = categoryId ? db.collection('items').where('categoryId', '==', categoryId) : db.collection('items')
       
        dbGetQueary.get()
        .then(data => setItems(data.docs.map(i => ({ id: i.id, ...i.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
}

export default getItems
