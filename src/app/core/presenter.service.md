
# Presenter Service

| Facade principale de communication entre les composants et les services.

**Les composants de devraient pas aprler directement aux services**

```ts
// Compléter les imports 

class Comonent(){
   public presenter = inject(PresenterService);
   
   // Compléter avec les enum ProcessScope ProcessType
   this.presenter.execute({type:..., scope:... payload:...})
}

```
