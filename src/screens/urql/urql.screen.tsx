import {ScrollView} from 'react-native';
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

const UrqlScreen = () => {
  const [result] = useQuery<{
    allFilms: {
      films: Array<{
        id: string;
        director: string;
        title: string;
        releaseDate: string;
      }>;
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

  if (!films || films.length === 0)
    return <ErrorScreen message={words.emptyData} />;

  return (
    <ScrollView>
      <Text variant="headlineSmall" style={styles.description}>
        {words.urqlDescription}
      </Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>{words.title}</DataTable.Title>
          <DataTable.Title>{words.director}</DataTable.Title>
          <DataTable.Title>{words.releaseDate}</DataTable.Title>
        </DataTable.Header>
        {films.map(item => (
          <DataTable.Row key={item?.id}>
            <DataTable.Cell>{item?.title}</DataTable.Cell>
            <DataTable.Cell>{item?.director}</DataTable.Cell>
            <DataTable.Cell>{item?.releaseDate}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </ScrollView>
  );
};

export default UrqlScreen;
