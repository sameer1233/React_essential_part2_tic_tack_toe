export default function PlayerContainer({children, ...props}){
    return (
        <ol {...props}>
          {children} 
       </ol>
    )
}