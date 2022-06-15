import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const DirectoryScreen = (props) => {
    const renderDirectoryItem = ({ item: poem }) => {
        return (
            <ListItem>
                <Avatar source={poem.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{poem.title}</ListItem.Title>
                    <ListItem.Subtitle>{poem.author}</ListItem.Subtitle>
                    <ListItem.Subtitle>{poem.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <FlatList
            data={props.poems}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default DirectoryScreen;