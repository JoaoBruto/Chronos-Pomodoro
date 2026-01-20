import styles from './Heading.module.css'

type HeadingProps = {
    name: string;
    henrique: string;
    idade: number;

}

export function Heading(props : HeadingProps) {
   
  return(
    <>
      <h1 className={styles.Heading}>Olá mundo {props.name}</h1>
      <h2>Henrique lindo {props.henrique}</h2>
      <h3>Henrique tem {props.idade} anos </h3>
    </>
  )
}