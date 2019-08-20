import { NextComponentType, NextPageContext } from 'next';
import { List } from '../../components/{{{lc}}}/List';
import { PagedCollection } from '../../interfaces/Collection';
import { {{{ucf}}} } from '../../interfaces/{{{ucf}}}';
import { fetch } from '../../utils/dataAccess';

interface Props {
  collection: PagedCollection<{{{ucf}}}>;
}

const Page: NextComponentType<NextPageContext, Props, Props> = ({collection}) => (
  <List {{{name}}}={collection['{{{hydraPrefix}}}member'] || []}/>
);

Page.getInitialProps = async () => {
  const collection = await fetch('/{{{name}}}');

  return {collection};
};

export default Page;
