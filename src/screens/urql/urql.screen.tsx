import {ScrollView, View} from 'react-native';
import {DataTable, Text} from 'react-native-paper';
import {useQuery} from 'urql';
import GlobalLoader from '../../components/globalLoader/globalLoader.component';
import {graphql} from '../../gql';
import {words} from '../../constants/words';
import styles from './urql.styles';

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
  const [result] = useQuery({
    query: TodosQuery,
  });

  const {data, fetching, error} = result;

  if (fetching) return <GlobalLoader />;

  const films = data?.allFilms?.films;

  if (!films) return <Text>Hello</Text>;

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
