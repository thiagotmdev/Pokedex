import './styles.css'

type Props = {
    id: number;
 }
 
 export const PokeImg = (props: Props)=>{
     let idImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`;
 
     return(
         <>
             <img src={idImg} alt="" />
         </>
     )
 }