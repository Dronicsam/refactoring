import { ActionIcon, Box, Flex, Stack, Text, Textarea } from '@mantine/core'
import { useState } from 'react'
import { useReplicasStore } from 'entities/scenario/model'
import { Eraser } from 'shared/iconpack'
import { DeleteButton, TimeSlider } from 'shared/ui'

export const Replica = ({ id }: { id: number }) => {
  const [text, setText] = useState('')
  const removeReplica = useReplicasStore((state) => state.removeReplica)
  const setReplica = useReplicasStore((state) => state.setReplica)
  const setInterval = useReplicasStore((state) => state.setInterval)
  return (
    <Stack
      bg="white"
      p="25px 40px 30px 25px"
      sx={{
        borderRadius: 10,
      }}
      w="100%"
      pos="relative"
    >
      <Box pos="absolute" right={15} top={10}>
        <DeleteButton onClick={() => removeReplica(id)} />
      </Box>

      <Flex gap={15} align="center">
        <Textarea
          rightSection={
            <ActionIcon onClick={() => setText('')}>
              <Eraser size={20} />
            </ActionIcon>
          }
          sx={{
            '.mantine-Textarea-rightSection': {
              display: 'flex',
              alignItems: 'start',
              padding: '10px 30px 0 0',
            },
          }}
          autosize
          placeholder="Введите реплику..."
          label="Реплика"
          w="45vw"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={(e) => setReplica(id, e.target.value)}
        />
      </Flex>
      <Text>Время для ответа оператора:</Text>
      <TimeSlider id={id} onChange={setInterval} />
    </Stack>
  )
}
