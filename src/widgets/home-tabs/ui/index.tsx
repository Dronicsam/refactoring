import { Tabs } from '@mantine/core'

export const HomeTabs = () => {
  console.log('не обращайте внимания')
  return (
    <Tabs defaultValue="main">
      <Tabs.List>
        <Tabs.Tab value="main">Главная</Tabs.Tab>
        <Tabs.Tab value="process">В процессе</Tabs.Tab>
        <Tabs.Tab value="completed">Завершённые</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="main">main</Tabs.Panel>
      <Tabs.Panel value="process">process</Tabs.Panel>
      <Tabs.Panel value="completed">completed</Tabs.Panel>
    </Tabs>
  )
}
