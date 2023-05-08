<template>
    <div>
        <div class="hold-transition sidebar-mini layout-fixed">
            <div class="wrapper">
                <!-- Navbar -->
                <Navbar></Navbar>
                <!-- End Navbar -->

                <!-- Sidebar -->
                <Sidebar></Sidebar>
                <!-- End Sidebar -->

                <div class="content-wrapper">
                    <!-- Content Header (Page header) -->
                    <div class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1 class="m-0">Dashboard</h1>
                            </div><!-- /.col -->
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active">Dashboard v1</li>
                                </ol>
                            </div><!-- /.col -->
                            </div><!-- /.row -->
                        </div><!-- /.container-fluid -->
                    </div>
                    <!-- /.content-header -->

                    <!-- Main content -->
                    <section class="content">
                        <div class="container-fluid">
                            <!-- Small boxes (Stat box) -->
                            <router-view></router-view>
                            <!-- /.row -->
                            <!-- Main row -->
                            <!-- /.row (main row) -->
                        </div><!-- /.container-fluid -->
                    </section>
                    <!-- /.content -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue';

export default {
    components: {
        Navbar,
        Sidebar
    }
}
</script>