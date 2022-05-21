<template>
  <div class="product-table-wrapper">
    <a-table
        :columns="columns"
        :loading="loading"
        @change="onTableChange"
        :data-source="entityPaginate.data"
        :pagination="entityPaginate.pagination"
    />
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import type {Product} from "app/domain/entity/Product";
import {ProductFields} from "app/domain/entity/Product";
import type {EntityPagination} from "app/domain/entity/EntityPagination";
import {container} from "app/inversify.config";
import {ProductRepository} from "app/application/repository/ProductRepository";
import type {Pagination} from "app/domain/entity/Pagination";
import {PaginationHelper} from "app/application/helper/PaginationHelper";

const productRepository = container.get(ProductRepository);

const columns = [
  {
    title: 'ASIN',
    key: ProductFields.asin,
    dataIndex: ProductFields.asin,
  },
  {
    title: 'URL',
    key: ProductFields.url,
    dataIndex: ProductFields.url,
  },
  {
    title: 'Name',
    key: ProductFields.name,
    dataIndex: ProductFields.name,
  },
  {
    title: 'Price',
    key: ProductFields.price,
    dataIndex: ProductFields.price,
  },
  {
    title: 'Brand',
    key: ProductFields.brand,
    dataIndex: ProductFields.brand,
  },
  {
    title: 'Image',
    key: ProductFields.image,
    dataIndex: ProductFields.image,
  },
  {
    title: 'Rating',
    key: ProductFields.rating,
    dataIndex: ProductFields.rating,
  },
  {
    title: 'ImageList',
    key: ProductFields.image_list,
    dataIndex: ProductFields.image_list,
  },
  {
    title: 'Description',
    key: ProductFields.description,
    dataIndex: ProductFields.description,
  },
];

/* State | Start */
const loading = ref(true);
const entityPaginate = ref<EntityPagination<Product>>({data: [], pagination: PaginationHelper.emptyAndCreateCopy()});
/* State | End */

const onTableChange = (pagination: Pagination, _f: any, _s: any, extra: Record<string, any>) => {
  if ('paginate' === extra.action) {
    entityPaginate.value.pagination = pagination;
    loadProductList();
  }
};

const loadProductList = async (): Promise<void> => {
  loading.value = true;
  const [offset, length] = PaginationHelper.getOffsetAndLength(entityPaginate.value.pagination);
  entityPaginate.value = await productRepository.getAllWithPagination(offset, length,);
  loading.value = false;
};

onMounted(loadProductList);

</script>

<style scoped>
.product-table-wrapper {
  width: 98vw;
  height: 90vh;
  overflow: auto;
}
</style>