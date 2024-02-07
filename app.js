const app = new Vue({
    el: '#app',
    data: {
      errors: [],
      name: null,
      time: null,
      ingredients: null,
      préparations: null,
      people: null,
      recipes: [] 
    },
    methods: {
      checkForm: function() {
        this.errors = [];
        // ... (validation existante)
  
        // Si aucune erreur, ajoutez la recette avec un identifiant unique
        if (!this.errors.length) {
          const newRecipe = {
            id: this.generateUniqueId(),
            name: this.name,
            time: this.time,
            ingredients: this.ingredients,
            préparations: this.préparations,
            people: this.people
          };
  
          this.recipes.push(newRecipe);
  
          // Réinitialisez les champs du formulaire après l'ajout
          this.name = null;
          this.time = null;
          this.ingredients = null;
          this.préparations = null;
          this.people = null;
        }
      },


      generateUniqueId: function() {
        // Cette fonction génère un identifiant unique simple pour chaque recette
        return Date.now();
      }

      deleteRecipe: function(recipeId) {
        // Filtrer la liste des recettes pour exclure celle que l'on veut supprimer
        this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
    }

    }
  });
  