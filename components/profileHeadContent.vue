<template>
  <div class="name-and-core-info">
    <div>
      <span>Lisa Tester</span>
      <span>17</span>
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
.name-and-core-info > div:first-child {
  font-size: 1.5rem;
  margin-bottom: 0.1rem;
  font-weight: 600;
}

.name-and-core-info > div:last-child {
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  color: var(--primary-color-light);
}

.name-and-core-info > div:last-child > :last-child {
    margin-left: 1rem;
}

.name-and-core-info > div:first-child > span:last-child {
  color: var(--primary-color-light);
  font-weight: normal;
  margin-left: 0.1rem;
}

.name-and-core-info a {
    color: var(--accent-primary-color);
}
</style>
