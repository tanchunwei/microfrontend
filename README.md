```mermaid
graph TD
  A[Container] -->|Contains| B
  A[Container] -->|Contains| C
  A[Container] -->|Contains| D
  A[Container] -->|Uses| E
  A[Container] -->|Calls| F
  B[Frontenend1] -->|Calls| F
  B[Frontenend1] -->|Uses| E
  C[Frontenend2] -->|Calls| F
  C[Frontenend2] -->|Uses| E
  D[Frontenend3] -->|Calls| F
  D[Frontenend3] -->|Uses| E
  E[Content]
  F[Web]
		
```