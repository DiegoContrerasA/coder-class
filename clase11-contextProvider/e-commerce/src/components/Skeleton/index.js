import classes from './styles.module.css'
const Skeleton = ({ styles }) => {
  return (
    <div style={{ ...styles }} className={classes.skeleton} />
  )
}

export default Skeleton
