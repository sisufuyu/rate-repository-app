import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Menu } from 'react-native-paper'

import theme from '../../theme'
import { useRepositoriesContext } from '../../hooks/useRepositoriesContext'

const styles  = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 40,
    borderBottomColor: theme.colors.surface,
    borderBottomWidth: 1,
    borderTopColor: theme.colors.surface,
    borderTopWidth: 1,
  },
  menuContent: {
    backgroundColor: 'white',
    width: '100%',
    marginTop: 40,
  },
  menuItem: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    width: '100%'
  }
})

const SortMenu = () => {
  const [visible, setVisible] = useState(false)
  const { orderBy, orderDirection, setOrderBy, setOrderDirection } = useRepositoriesContext()

  const title = orderBy === 'CREATED_AT' 
    ? 'Latest repositories'
    : orderDirection === 'DESC' ? 'Highest rated repositories' : 'Lowest rated repositories'

  const openMenu = () => setVisible(true)

  const closeMenu = () => setVisible(false)

  const order = ({ orderBy, OrderDirection }) => {
    closeMenu()
    setOrderBy(orderBy)
    setOrderDirection(OrderDirection)
  }

  const sortByLatest = () => {
    order({ title: 'Latest repositories', orderBy: 'CREATED_AT', OrderDirection: 'DESC' })
  }

  const sortByHighest = () => {
    order({ title: 'Highest rated repositories', orderBy: 'RATING_AVERAGE', OrderDirection: 'DESC' })
  }

  const sortByLowest = () => {
    order({ title: 'Lowest rated repositories', orderBy: 'RATING_AVERAGE', OrderDirection: 'ASC' })
  }

  return (
    <View style={styles.container}>
      <Menu
        id="menu"
        visible={visible}
        onDismiss={closeMenu}
        contentStyle={styles.menuContent}
        anchor={<Button onPress={openMenu} icon="menu-down" buttonColor='white' textColor='black'>{title}</Button>}
      >
        <Menu.Item onPress={sortByLatest} title="Latest repositories" style={styles.menuItem} />
        <Menu.Item onPress={sortByHighest} title="Highest rated repositories" style={styles.menuItem} />
        <Menu.Item onPress={sortByLowest} title="Lowest rated repositories" style={styles.menuItem} />
      </Menu>
    </View>
  )
}

export default SortMenu