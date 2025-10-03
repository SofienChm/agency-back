<template>
  <div>
    <div style="color:#fff;">App viewed: {{ viewCount }} times</div>

    <div class="test">
      <button @click="toggleClass">test</button>
    </div>
    <ul :class="{ 'toggled-class': isToggled }">
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { db, doc, getDoc, setDoc, updateDoc, increment } from '../firebase.js';

export default {
  setup() {
    const viewCount = ref(0);
    const isToggled = ref(false);

    async function updateAndFetchViewCount() {
      const countDocRef = doc(db, "counters", "appViews");
      const docSnap = await getDoc(countDocRef);

      if (!docSnap.exists()) {
        await setDoc(countDocRef, { views: 1 });
        viewCount.value = 1;
      } else {
        await updateDoc(countDocRef, { views: increment(1) });
        const updatedSnap = await getDoc(countDocRef);
        viewCount.value = updatedSnap.data().views;
      }
    }

    function toggleClass() {
      isToggled.value = !isToggled.value;
    }

    onMounted(() => {
      updateAndFetchViewCount();
    });

    return { viewCount, isToggled, toggleClass };
  },
};
</script>

<style>
.toggled-class {
  background-color: yellow;
}
</style>
