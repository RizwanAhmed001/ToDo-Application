function Empty({data}){
  return (
    <>
      {
        data.length === 0 ? <h1 className="empty">No Task Available</h1> : null
      }
    </>
  )
}
export default Empty;