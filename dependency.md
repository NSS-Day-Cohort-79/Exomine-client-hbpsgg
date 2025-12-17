``` mermaid
graph TD;

Main.js-->Governors.js
Main.js-->Colonies.js
Main.js-->Facilities.js
Main.js-->Minerals.js
Main.js-->SpaceCart.js

Governors.js-->TransientState.js
Facilities.js-->TransientState.js
Minerals.js-->TransientState.js
SpaceCart.js-->TransientState.js

Governors.js-->ApiManager.js
Colonies.js-->ApiManager.js
Facilities.js-->ApiManager.js
Minerals.js-->ApiManager.js
Inventory.js-->ApiManager.js

Inventory.js-->TransientState.js
SpaceCart.js-->Inventory.js

Database.js-->ApiManager.js

```