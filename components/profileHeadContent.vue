<template>
  <div class="name-and-core-info">
    <div>
      <span>Lisa Tester</span>
      <span>(17)</span>
    </div>
    <div>
      <div>
        <i class="fas fa-bed"></i>
        <span> N-123</span>
      </div>
      <div>
        <i class="fas fa-users-crown"></i>
        <a href="tel:+4917642404082"> Teamer-XY</a>
      </div>
    </div>
  </div>
</template>

<style>
.name-and-core-info a {
  color: var(--primary-color-light);
}

.name-and-core-info > div:first-child {
  font-size: 1.4em;
  color: var(--primary-color);
  margin-bottom: 0.2em;
}

.name-and-core-info > div:last-child {
  font-size: 0.75em;
  display: flex;
  align-items: center;
  color: var(--primary-color-light);
}

.name-and-core-info > div:last-child > :last-child {
  margin-left: .75em;
}

.name-and-core-info > div:first-child > span:last-child {
  margin-left: 0.1em;
}
</style>
