import { Text } from '@mantine/core'
import styles from './skill.module.css'

interface SkillProps {
  skill: string
}

export const Skill = ({ skill }: SkillProps) => (
  <Text fw={300} size={24} className={styles.skill}>
    {skill}
  </Text>
)
