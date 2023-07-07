import {FlatList, ScrollView} from 'react-native';
import {DataTable, MD2Colors, Text} from 'react-native-paper';
import {useQuery} from 'urql';
import GlobalLoader from '../../components/globalLoader/globalLoader.component';
import {graphql} from '../../gql';
import {words} from '../../constants/words';
import styles from './urql.styles';
import ErrorScreen from '../../components/errorScreen/errorScreen.component';

const TodosQuery = graphql(`
  query ExampleQuery {
    allFilms {
      films {
        id
        director
        title
        releaseDate
      }
    }
  }
`);

type Film = {
  id: string;
  director: string;
  title: string;
  releaseDate: string;
};

const UrqlScreen = () => {
  const [result] = useQuery<{
    allFilms: {
      films: Array<Film>;
    };
  }>({
    query: TodosQuery,
  });

  const {data, fetching, error} = result;

  if (fetching) return <GlobalLoader />;
  if (error)
    return (
      <ErrorScreen
        color={MD2Colors.red500}
        message={`${words.errorLoadGQLData} : ${error.message}`}
      />
    );

  const films = data?.allFilms.films;

  const renderItem = ({item}: {item: Film}) => (
    <DataTable.Row key={item?.id}>
      <DataTable.Cell>{item?.title}</DataTable.Cell>
      <DataTable.Cell>{item?.director}</DataTable.Cell>
      <DataTable.Cell>{item?.releaseDate}</DataTable.Cell>
    </DataTable.Row>
  );

  return (
    <FlatList
      data={films}
      keyExtractor={item => item?.id}
      renderItem={renderItem}
      ListHeaderComponent={() => (
        <>
          <Text variant="headlineSmall" style={styles.description}>
            {words.urqlDescription}
          </Text>
          <DataTable.Header>
            <DataTable.Title>{words.title}</DataTable.Title>
            <DataTable.Title>{words.director}</DataTable.Title>
            <DataTable.Title>{words.releaseDate}</DataTable.Title>
          </DataTable.Header>
        </>
      )}
      ListEmptyComponent={() => (
        <Text style={styles.emptyMessage}>{words.emptyData}</Text>
      )}
    />
  );
};

export default UrqlScreen;
