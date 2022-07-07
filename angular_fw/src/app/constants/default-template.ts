export const DEFAULT_TEMPLATE =
`<div style="color: darkgreen">
  <h3 style="color: #547536">Name: {{ person.firstName }} {{ person.lastName }}</h3>
  <div>Phone: {{ person.phone }}</div>
  <div *ngIf="person.email">Email: {{ person.email }}</div>
  <div>Gender: {{ person.gender === 'M' ? 'Male' : 'Female' }}</div>
</div>`;
