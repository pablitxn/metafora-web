import { FunctionComponent } from 'react';
import { NavigationContainer, List, ListItem, Button } from './styles';

const Navigation: FunctionComponent<INavigationProps> = ({ onPageChange, pageSelected = '00' }) => {
  const isActive = (page: Page) => page === pageSelected;

  return (
    <NavigationContainer>
      <List>
        <ListItem isActive={isActive('01')}>
          <Button type="button" onClick={() => onPageChange('01')}>
            01
          </Button>
        </ListItem>
        <ListItem isActive={isActive('02')}>
          <Button type="button" onClick={() => onPageChange('02')}>
            02
          </Button>
        </ListItem>
        <ListItem isActive={isActive('03')}>
          <Button type="button" onClick={() => onPageChange('03')}>
            03
          </Button>
        </ListItem>
      </List>
    </NavigationContainer>
  );
};

export default Navigation;
