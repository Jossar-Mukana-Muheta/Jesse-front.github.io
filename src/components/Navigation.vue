<template>
  <div>
      <v-navigation-drawer app v-model="drawer" class="orange lighten-2" dark disable-resize-watcher>
        <v-list
        nav
        dense
      >
        <v-list-item-group v-model="item" color="secondary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
        </v-navigation-drawer>
    
    <v-app-bar height="150px" app color="#F57F17" dense dark shrink-on-scroll
      src="https://images.unsplash.com/photo-1570120090708-6014886db15d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
      fade-img-on-scroll 
      >

 <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title>{{appTitle}}</v-toolbar-title>

      <v-spacer></v-spacer>

    <v-btn class="hidden-sm-and-down" text>Accueil</v-btn>
    <v-btn class="hidden-sm-and-down" text>Contact</v-btn>
    <v-btn class="hidden-sm-and-down" text>Galerie</v-btn>

      
    </v-app-bar>
    

  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
        return {
            appTitle: 'JESSE',
            drawer: false,
            item: 0,
            items: [
                { title: 'Accueil' },
                { title: 'Contact' },
                { title: 'Galerie' }
            ]
        };
    }
};
</script>

<style lang='scss' scoped>
    button{
        margin-top: 10px !important;
    }

    #logo{
        height: 178px;
        margin-top: 201px;
    }

</style>
