import { AvatarProps } from '../../typings/typings';
import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, src }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt="Avatar"
    />
  );
}