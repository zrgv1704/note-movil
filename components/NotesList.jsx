import { FlatList, View } from 'react-native'
import NotesItem from './NotesItem'

const NotesList = ({notes}) =>{
    return (
        <View>
            <FlatList
                data={notes}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>(
                    <NotesItem note={item} />
                )}
            />
        </View>
    )
}

export default NotesList