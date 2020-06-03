const DEFAULT_TEMPLATE = `
<div style={{color:'orange'}}>
  <h3 style={{color:'#547536'}}>Name: { person.firstName } { person.lastName }</h3>
  { person.phone ? (<div>Phone: { person.phone }</div>) : null}
  <div>Email: { person.email }</div>
  <div>Gender: { person && (person.gender === 'M' ? 'Male' : 'Female') }</div>
</div>`;

export default DEFAULT_TEMPLATE;