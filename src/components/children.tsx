type ChieldrenChildren = {
  children: React.ReactNode;  
}

export function Chieldren({children} : ChieldrenChildren) {
  return (
    <>
      <h1>{children}</h1>
    </>
  )
}