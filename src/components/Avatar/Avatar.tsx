import { AvatarProps } from '../../typings/typings';
import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  console.log(props)
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
      alt="Avatar"
    />
  );
}