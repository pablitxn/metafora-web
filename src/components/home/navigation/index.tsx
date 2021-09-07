import { FunctionComponent } from 'react';
import { NavigationContainer, List, ListItem, Button } from './styles';

const Navigation: FunctionComponent<INavigationProps> = ({ onPageChange, pageSelected = '00' }) => {
  const handleClassName = (page: Page) => (page === pageSelected ? 'active' : '');

  return (
    <NavigationContainer>
      <List>
        <ListItem className={handleClassName('01')}>
          <Button type="button" onClick={() => onPageChange('01')}>
            01
          </Button>
        </ListItem>
        <ListItem className={handleClassName('02')}>
          <Button type="button" onClick={() => onPageChange('02')}>
            02
          </Button>
        </ListItem>
        <ListItem className={handleClassName('03')}>
          <Button type="button" onClick={() => onPageChange('03')}>
            03
          </Button>
        </ListItem>
      </List>
    </NavigationContainer>
  );
};

export default Navigation;
